from django.db import models

# Create your models here.
class Task(models.Model):

    title = models.CharField( max_length=50)
    completed = models.BooleanField(default=False,blank=True,null=True)


    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Task_detail", kwargs={"pk": self.pk})
