from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import *
from .models import *

class NotesViewSet(ModelViewSet):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Notes.objects.all()
        return Notes.objects.filter(creator=self.request.user)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)
    
