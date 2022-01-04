from rest_framework import serializers
from appMaieutics.models.user import User




class UserSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = User
        fields = ['username', 'name', 'last_name', 'email', 'password', 'topics', 'current_profession', 'country', 'date_birth', 'gender']

    def create(self, validated_data):
        userInstance = User.objects.create(**validated_data)
        return userInstance

    def to_representation(self, obj):
        user = User.objects.get(id=obj.id)
        return {
            'username': user.username,
            'name': user.name,
            'last_name': user.last_name,
            'email': user.email,
            'password': user.password,
            'topics': user.topics,
            'current_profession': user.current_profession,
            'country': user.country,
            'date_birth': user.date_birth,
            'gender': user.gender
        }