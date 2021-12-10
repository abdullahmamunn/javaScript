#include<stdio.h>
struct distance{
   float feet;
   float inch;
};
int main()
{
    struct distance d1;
    struct distance d2;

    printf("Enter distance 1\n");
    printf("Enter feet: ");
    scanf("%f",&d1.feet);
    printf("Enter inch: ");
    scanf("%f",&d1.inch);

    printf("Enter distance 2\n");
    printf("Enter feet: ");
    scanf("%f",&d2.feet);
    printf("Enter inch: ");
    scanf("%f",&d2.inch);

    float sum1 = d1.feet + d1.inch;
    float sum2 = d2.feet + d2.inch;

    printf("Distance 1 sum is %.3f\n",sum1);
    printf("Distance 2 sum is %.3f\n",sum2+sum1);

    return 0;
}