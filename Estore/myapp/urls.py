from django.urls import path
from . import views


urlpatterns = [
    path('', views.get_product, name='home'),
    path('create/', views.create, name='create'),
    path('<int:pk>/', views.get_productDetail, name='detaill'),
    path('login/', views.signIn, name='login'),
    path('signUp/', views.signUp, name='signUp'),
    path('signOut/', views.signOut, name='signOut'),
    path('checkout/', views.checkout, name='checkout')
]