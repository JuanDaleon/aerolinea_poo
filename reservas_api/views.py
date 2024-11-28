from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import reservas_api.models as reservas_models
import reservas_api.serializers as reservas_serializers
import vuelos_api.models as vuelos_models


class ReservasManager(APIView):
    def get(self, request, reserva_id=None):
        if reserva_id:
            reserva = reservas_models.Reserva.objects.get(id=reserva_id)
            serializer = reservas_serializers.ReservaSerializer(reserva)
            return Response(serializer.data)
        else:
            reservas = reservas_models.Reserva.objects.all()
            serializer = reservas_serializers.ReservaSerializer(
                reservas, many=True)
            return Response(serializer.data)

    def post(self, request):
        serializer = reservas_serializers.ReservaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, reserva_id):
        try:
            reserva = reservas_models.Reserva.objects.get(id=reserva_id)
            data = request.data

            if data.get("estado") == "Pagada":
                reserva.estado = "Pagada"

                avion = reserva.vuelo.avion

                asiento_disponible = vuelos_models.Asiento.objects.filter(
                    avion=avion, disponibilidad=True
                ).first()

                if asiento_disponible:
                    asiento_disponible.disponibilidad = False
                    asiento_disponible.save()

                reserva.save()
                return Response(
                    {"message": "Reserva pagada y asiento marcado como ocupado."}
                )
            return Response({"error": "Estado no válido"}, status=status.HTTP_400_BAD_REQUEST)

        except reservas_models.Reserva.DoesNotExist:
            return Response({"error": "Reserva no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def delete(self, request, reserva_id):
        reserva = reservas_models.Reserva.objects.get(id=reserva_id)
        reserva.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ReservasUsuario(APIView):
    def get(self, request):
        user_id = request.query_params.get('user_id')
        if user_id:
            reservas = reservas_models.Reserva.objects.filter(
                pasajero_id=user_id)
            serializer = reservas_serializers.ReservasUsuariosSerializer(
                reservas, many=True)
            return Response(serializer.data)
        return Response({"error": "User ID not provided"}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        serializer = reservas_serializers.ReservasUsuariosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
