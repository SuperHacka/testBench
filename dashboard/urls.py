
from django.urls import path
from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('Navbar',views.navbar, name='Navbar'),
    path('base', views.base, name='base'),
    
]


"""

"""