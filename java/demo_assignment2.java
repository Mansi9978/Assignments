package p1;

import java.util.Scanner;

public class demo_assignment2 {

	public static void main(String[] args) {
		
		System.out.println("Q-1");
		Scanner sc= new Scanner(System.in);  
		System.out.println("Enter number- ");  
		int a= sc.nextInt();
		if(a>0) System.out.println("Positive");
		else System.out.println("Negative");
		
		System.out.println();
		System.out.println("Q-2");  
		System.out.print("Enter a: ");  
		int a1 = sc.nextInt();  
		System.out.print("Enter b: ");  
		int b = sc.nextInt();  
		System.out.print("Enter c: ");  
		int c = sc.nextInt();  
		double d=b*b-4.0*a1*c;  
		if (d>0)   
		{  
		double r1=(-b+Math.pow(d, 0.5))/(2.0*a1);  
		double r2=(-b-Math.pow(d, 0.5))/(2.0*a1);   
		}   
		else if (d==0.0)   
		{  
		double r1=-b/(2.0*a1);  
		System.out.println("Root is " + r1);  
		}   
		else   
		{  
		System.out.println("Roots are not real.");  
		}  
		
		System.out.println();
		System.out.println("Q-3");  
		System.out.println("Enter Year- ");  
		int year= sc.nextInt();
		if(((year%4==0) && (year%100!=0)) || (year%400==0))
		System.out.println("leap-year");
		else
		System.out.println("not a leap-year");
		
		System.out.println();
		System.out.println("Q-4");
		System.out.println("Enter 5 numbers- ");
		int n1= sc.nextInt();
		int n2= sc.nextInt();
		int n3= sc.nextInt();
		int n4= sc.nextInt();
		int n5= sc.nextInt();
		int sum=(n1+n2+n3+n4+n5);
		int av=sum/5;
		System.out.println("Sum= " + sum + " and average= " + av);
		
		System.out.println();
		System.out.println("Q-5");
		System.out.println("Enter number of rows");
		int rows=sc.nextInt();
		for(int i=1;i<=rows;i++)
		{
			for(int j=1;j<=i;j++)
				System.out.print(j);
			System.out.println();
		}
		
	}

}
