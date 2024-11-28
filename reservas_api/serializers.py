from rest_framework import serializers
from .models import Reserva, Pago
import vuelos_api.models as vuelos_models
import user_api.models as user_models
import vuelos_api.serializers as vuelos_serializers
import user_api.serializers as user_serializers

class ReservaSerializer(serializers.ModelSerializer):
    vuelo = serializers.PrimaryKeyRelatedField(queryset=vuelos_models.Vuelo.objects.all())
    pasajero = serializers.PrimaryKeyRelatedField(queryset=user_models.User.objects.all())

    class Meta:
        model = Reserva
        fields = '__all__'

class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pago
        fields = '__all__'
        
        
        
class ReservasUsuariosSerializer(serializers.ModelSerializer):
    vuelo = vuelos_serializers.VueloSerializer()
    pasajero = user_serializers.UserSerializer()
    class Meta:
        model = Reserva
        fields = '__all__'