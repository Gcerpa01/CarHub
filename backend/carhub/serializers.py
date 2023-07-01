from rest_framework import serializers
from .models import Group, Message, Profile, Product, CartItem

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name', 'members', 'description', 'joined', 'image']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['name', 'email', 'bio', 'password', 'notifications_enabled', 'preferred_language', 'card_number', 'expiration_date', 'billing_address']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['name', 'message', 'group', 'timestamp']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = '__all__'

