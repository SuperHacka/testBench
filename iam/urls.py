from django.urls import path
from iam import views
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path("signUp", views.signUp, name="signUp"),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('logout', views.logoutUser, name='logout'),
    path('password', views.password,name='password'),
    path('home', views.home,name='home'),
]