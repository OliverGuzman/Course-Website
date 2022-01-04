from django.conf import settings
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.backends import TokenBackend
from rest_framework.permissions import IsAuthenticated
from appMaieutics.models.user import User
from appMaieutics.serializers.userSerializer import UserSerializer

class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserUpdateView(generics.UpdateAPIView):
        serializer_class   = UserSerializer
        queryset           = User.objects.all()

        def update(self, request, *args, **kwargs):
            return super().update(request, *args, **kwargs)


class UserDeleteView(generics.DestroyAPIView):
    serializer_class   = UserSerializer
    queryset           = User.objects.all()

    def delete(self, request, *args, **kwargs):        
        return super().destroy(request, *args, **kwargs)

