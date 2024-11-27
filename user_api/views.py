from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import user_api.models as user_models
import user_api.serializers as user_serializers

class UserManager(APIView):
    def get(self, request, user_id=None):
        if user_id:
            user = user_models.User.objects.get(id=user_id)
            serializer = user_serializers.UserSerializer(user)
            return Response(serializer.data)
        else:
            users = user_models.User.objects.all()
            serializer = user_serializers.UserSerializer(users, many=True)
            return Response(serializer.data)

    def post(self, request):
        serializer = user_serializers.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, user_id):
        user = user_models.User.objects.get(id=user_id)
        serializer = user_serializers.UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id):
        user = user_models.User.objects.get(id=user_id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
class LoginManager(APIView):
    def post(self, request):
        usuario = request.data.get('usuario')
        password = request.data.get('password')
        
        try:
            user = user_models.User.objects.get(usuario=usuario)
        except user_models.User.DoesNotExist:
            print('usuario no existe')
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        print('user_id', user.id)
        if user.password == password:
            print('usuario logueado')
            return Response({"message": "Login exito", "user_id": user.id}, status=status.HTTP_200_OK)
        else:
            print('usuario no logueado')
            return Response({"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)
        

class RegisterManager(APIView):
    def post(self, request):
        serializer = user_serializers.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print('usuario registraod')
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        print('usuario no registrado')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)