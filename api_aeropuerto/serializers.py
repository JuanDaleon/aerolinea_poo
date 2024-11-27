from rest_framework import serializers
import api_aeropuerto.models as aeropuerto_models

class PaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = aeropuerto_models.Pais
        fields = ['nombre']

class CiudadSerializer(serializers.ModelSerializer):
    pais = PaisSerializer()

    class Meta:
        model = aeropuerto_models.Ciudad
        fields = ['nombre', 'pais']

class AeropuertoSerializer(serializers.ModelSerializer):
    ciudad = CiudadSerializer()

    class Meta:
        model = aeropuerto_models.Aeropuerto
        fields = ['nombre', 'ciudad']