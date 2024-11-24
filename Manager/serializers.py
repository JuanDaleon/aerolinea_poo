from rest_framework import serializers
from .models import Flight, Booking, User

class Flight_serializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = '__all__'



class Booking_serializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'



class User_serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'is_active', 'is_staff']
