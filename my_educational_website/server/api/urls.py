from django.urls import path
from .views import get_users, create_user, user_detail, get_articles, create_article, article_detail, get_videos, create_video, video_detail


urlpatterns = [
    path('users/', get_users, name='get_users'),
    path('users/create', create_user, name='create_user'),
    path('users/<int:pk>/', user_detail, name='user_detail'),
    path('articles/', get_articles, name= 'get_articles'),
    path('articles/create', create_article, name='create_article'),
    path('articles/<int:pk>/', article_detail, name='articles_detail'),
    path('videos/', get_videos, name='get_videos'),
    path('videos/create', create_video, name='create_video'),
    path('videos/<int:pk>/', video_detail, name='video_detail'),
]
