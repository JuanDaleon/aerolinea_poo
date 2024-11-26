from rest_framework import serializers
from .models import Vuelo

class VuelosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vuelo
        fields = '__all__'