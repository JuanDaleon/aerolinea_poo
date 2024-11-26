from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import api_aeropuerto.serializers as aeropuerto_serializers
import api_aeropuerto.models as aeropuerto_models

class AeropuertosManager(APIView):
    def get(self, request, aeropuerto_id=None):
        if aeropuerto_id:
            aeropuerto = aeropuerto_models.Aeropuerto.objects.get(id=aeropuerto_id)
            serializer = aeropuerto_serializers.AeropuertoSerializer(aeropuerto)
            return Response(serializer.data)
        else:
            aeropuertos = aeropuerto_models.Aeropuerto.objects.all()
            serializer = aeropuerto_serializers.AeropuertoSerializer(aeropuertos, many=True)
            return Response(serializer.data)
        
    def post(self, request):
        serializer = aeropuerto_serializers.AeropuertoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, aeropuerto_id):
        aeropuerto = aeropuerto_models.Aeropuerto.objects.get(id=aeropuerto_id)
        serializer = aeropuerto_serializers.AeropuertoSerializer(aeropuerto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, aeropuerto_id):
        aeropuerto = aeropuerto_models.Aeropuerto.objects.get(id=aeropuerto_id)
        aeropuerto.delete()