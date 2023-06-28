from rest_framework import serializers
from .models import Group
from .models import Message
from .models import Profile
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id','name','members','description','joined','image']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['name', 'email', 'bio', 'password', 'notifications_enabled', 'preferred_language', 'card_number', 'expiration_date', 'billing_address']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['name','message','group','timestamp']