#include<stdio.h>
struct date{
    int year;
    int month;
    int day;
};

void displayDates(struct date d1[])
{
    int i;
    printf("\nPrint the stored data as output: \n");
    for(i=0;i<5;i++)
    {
        printf("%d %d %d\n",d1[i].year,d1[i].month,d1[i].day);
    }
}

void oldestDate(struct date d1[])
{
   int i;
   int old_year = d1[0].year;
   int old_month = d1[0].month;
   int old_day = d1[0].day;
   for(i=0; i<5; i++)
   {
       if(d1[i].year == 0 && d1[i].month == 0 && d1[i].day == 0){
           break;
       }
   // old year old month and old day
      if(d1[i].year < old_year)
      {
         old_year = d1[i].year;
         old_month = d1[i].month;
         old_day = d1[i].day;
      }

   }

 printf("%d %d %d",old_year, old_month, old_day);

}

void findLeapYear(struct date d1[])
{
     int i;
     for(i=0; i<5; i++)
     {
         if((d1[i].year % 4 ==0 && d1[i].year % 100 !=0) || d1[i].year % 400 == 0){
               printf("%d ",d1[i].year);
         }
     }
}

void getMonthDate(int month)
{

    switch(month){
        case 1:
        printf("January is 31 days");
        break;
        case 2:
        printf("February is 28 or 29 days");
        break;
        case 3:
        printf("March is 31 days");
        break;
        case 4:
        printf("April is 30 days");
        break;
        case 5:
        printf("January is 30 days");
        break;
        case 6:
        printf("January is 30 days");
        break;
        case 7:
        printf("January is 31 days");
        break;
        case 8:
        printf("January is 31 days");
        break;
        case 9:
        printf("January is 30 days");
        break;
        case 10:
        printf("January is 31 days");
        break;
        case 11:
        printf("January is 30 days");
        break;
        case 12:
        printf("January is 31 days");
        break;
        default: 
            printf("Invalid input! Please enter month number between 1-12");

    }
}

int main()
{
    struct date d[5];
    int i;
    printf("Enter 5 dates:\n");
    for(i=0;i<5;i++)
    {
        scanf("%d %d %d",&d[i].year,&d[i].month,&d[i].day);
    }
   // display dates
   displayDates(d);
   printf("\nOldest date:\n");

   // display oldest dates
   oldestDate(d);
   printf("\n\nAll leap years are:\n");

   //display leap year
   findLeapYear(d);

   int month;
   printf("\n\nEnter a month: ");
   scanf("%d",&month);

   //display months date
   getMonthDate(month);

 return 0;

}
