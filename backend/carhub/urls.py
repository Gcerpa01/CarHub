"""
URL configuration for carhub project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from carhub import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('groups/', views.group_list),
    path('groups/<int:id>/', views.group_detail),
    path('messages/',views.message_list),
    path('messages/<int:id>',views.message_detail),
    path('profiles/', views.profile_list),
    path('profiles/<int:id>/', views.profile_detail),
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_detail),
    path('cart-items/', views.cart_item_list),
    path('cart-items/<int:id>/', views.cart_item_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)