#urls 
from django.urls import path, include
from rest_framework import routers
from Manager import views


router = routers.DefaultRouter()
router.register(r'flight_manager', views.Flight_manager, basename= 'flight_manager')
router.register(r'user_manager', views.User_manager, basename= 'user_manager')
router.register(r'booking_manager', views.Booking_manager, basename= 'booking_manager')




urlpatterns = [
    path('api/manager/', include(router.urls)),
    
]