from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import vuelos_api.models as vuelos_models
import vuelos_api.serializers as vuelos_serializers

class VuelosManager(APIView):
    def get(self, request, vuelo_id=None):
        if vuelo_id:
            vuelo = vuelos_models.Vuelo.objects.get(id=vuelo_id)
            serializer = vuelos_serializers.VuelosSerializer(vuelo)
            return Response(serializer.data)
        else:
            vuelos = vuelos_models.Vuelo.objects.all()
            serializer = vuelos_serializers.VuelosSerializer(vuelos, many=True)
            return Response(serializer.data)
        
    def post(self, request):
        serializer = vuelos_serializers.VuelosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, vuelo_id):
        vuelo = vuelos_models.Vuelo.objects.get(id=vuelo_id)
        serializer = vuelos_serializers.VuelosSerializer(vuelo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, vuelo_id):
        vuelo = vuelos_models.Vuelo.objects.get(id=vuelo_id)
        vuelo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
