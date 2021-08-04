package p1;
import java.util.*;
public class demo {

	public static void main(String[] args) {
		
		System.out.println("Q-1");
		Scanner sc= new Scanner(System.in);  
		System.out.println("Enter first number- ");  
		int a= sc.nextInt();  
		System.out.println("Enter second number- ");  
		int b= sc.nextInt();  
		System.out.println(b/a);
		
		//******************************
		
		System.out.println("Q-2");
		int a1=-5+8*6,b1=(55+9)%9,c1=20+(-3*5)/8,d1=5+(15/3)*2-(8%3);
		System.out.println(a1);
		System.out.println(b1);
		System.out.println(c1);
		System.out.println(d1);
		
		//*********************************
		System.out.println("Q-3");
		
		for(int i=0;i<5;i++)
		{
			if(i%2==0)
			{
			for(int j=0;j<6;j++) System.out.print("* ");
			}
			else
			{
			for(int j=0;j<5;j++) System.out.print(" *");
			System.out.print("  ");
			}
			
			for(int k=0;k<20;k++) System.out.print("=");
			System.out.println();
		}
		for(int k=0;k<5;k++)
		{
		for(int i=0;i<32;i++) System.out.print("=");
		System.out.println();
		}
		
		//***********************************
		System.out.println("Q-4");
		
		System.out.print("  +");
		for(int i=0;i<7;i++) System.out.print("'");
		System.out.print("+");
		System.out.println();
		
		System.out.println("[ |  o o  | ]");
		System.out.println("  |   ^   |  ");
		System.out.println("  |  '-'  |  ");
		System.out.print("  +");
		for(int i=0;i<7;i++) System.out.print("-");
		System.out.print("+");
		System.out.println();
		
		//**************************************
		
		System.out.println("Q-5");
		int dn=10,t=0;
		String s="";
		while(dn!=0)
		{
			t=dn%2;
			s=s+t;
			dn=dn/2;
		}
		char[] ch1 = s.toCharArray();
		for(int i=ch1.length-1;i>=0;i--) System.out.print(ch1[i]);
		System.out.println();
		
		System.out.println("Q-7");
		int[][] arr1 = { { 1,2,4,5 }, { 3,4,6,8 }, { 6,10,78,65 } };
		  
        for (int i=0;i<3;i++)
            for (int j=0;j<4;j++) arr1[i][j]-=10;
        for (int i=0;i<3;i++)
        {
            for (int j=0;j<4;j++) System.out.print(arr1[i][j]+" ");
            System.out.println();
        }
        
		
        System.out.println("Q-8");
		String ss1="apple",ss2="Apple";
		System.out.println("They are equal: " + ss1.equals(ss2));
		
		System.out.println("Q-9");
		String st1= "HelloThere";
		String st2= st1.replace('e','x');
		System.out.println(st2);
	}

}
