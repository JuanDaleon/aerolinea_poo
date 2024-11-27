from rest_framework import serializers
import vuelos_api.models as vuelos_models

class AsientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = vuelos_models.Asiento
        fields = ['numero', 'clase', 'disponibilidad']

class VueloSerializer(serializers.ModelSerializer):
    asientos = serializers.SerializerMethodField()

    class Meta:
        model = vuelos_models.Vuelo
        fields = ['origen', 'destino', 'duracion', 'precio', 'avion', 'fecha_salida', 'fecha_llegada', 'hora_salida', 'hora_llegada', 'asientos']

    def get_asientos(self, obj):
        asientos = vuelos_models.Asiento.objects.filter(avion=obj.avion)
        return AsientoSerializer(asientos, many=True).data