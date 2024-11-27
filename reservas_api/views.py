from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import reservas_api.models as reservas_models
import reservas_api.serializers as reservas_serializers

class ReservasManager(APIView):
    def get(self, request, reserva_id=None):
        if reserva_id:
            reserva = reservas_models.Reserva.objects.get(id=reserva_id)
            serializer = reservas_serializers.ReservaSerializer(reserva)
            return Response(serializer.data)
        else:
            reservas = reservas_models.Reserva.objects.all()
            serializer = reservas_serializers.ReservaSerializer(reservas, many=True)
            return Response(serializer.data)
        
    def post(self, request):
        serializer = reservas_serializers.ReservaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, reserva_id):
        reserva = reservas_models.Reserva.objects.get(id=reserva_id)
        serializer = reservas_serializers.ReservaSerializer(reserva, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, reserva_id):
        reserva = reservas_models.Reserva.objects.get(id=reserva_id)
        reserva.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
