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