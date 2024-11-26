from rest_framework import serializers
import api_aeropuerto.models as aeropuerto_models

class AeropuertoSerializer(serializers.ModelSerializer):
    class Meta:
        model = aeropuerto_models.Aeropuerto
        fields = '__all__'