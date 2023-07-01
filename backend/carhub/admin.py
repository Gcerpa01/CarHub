from django.contrib import admin
from .models import Group, Profile, Message, Product, CartItem

admin.site.register(Group)
admin.site.register(Profile)
admin.site.register(Message)
admin.site.register(Product)
admin.site.register(CartItem)
