from rest_framework import serializers
import vuelos_api.models as vuelos_models
import api_aeropuerto.serializers as aeropuerto_serializers

class AerolineaSerializer(serializers.ModelSerializer):
    class Meta:
        model = vuelos_models.Aerolinea
        fields = ['nombre']

class AsientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = vuelos_models.Asiento
        fields = ['numero', 'clase', 'disponibilidad']

class VueloSerializer(serializers.ModelSerializer):
    asientos = serializers.SerializerMethodField()
    ciudad_origen = aeropuerto_serializers.CiudadSerializer(source='origen.ciudad')
    ciudad_destino = aeropuerto_serializers.CiudadSerializer(source='destino.ciudad')
    aerolinea = AerolineaSerializer(source='avion.aerolinea')

    class Meta:
        model = vuelos_models.Vuelo
        fields = ['origen', 'destino', 'duracion', 'precio', 'avion', 'fecha_salida', 'fecha_llegada', 'hora_salida', 'hora_llegada', 'asientos', 'ciudad_origen', 'ciudad_destino', 'aerolinea']

    def get_asientos(self, obj):
        asientos = vuelos_models.Asiento.objects.filter(avion=obj.avion)
        return AsientoSerializer(asientos, many=True).data