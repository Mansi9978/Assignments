package p1;

import java.util.Scanner;

public class demo_assignment4 {

	public static void main(String[] args) {
		System.out.println("Q-1");
		Scanner sc= new Scanner(System.in);  
		System.out.println("Enter number- ");  
		int a= sc.nextInt(),f=0;
		String str=String.valueOf(a);
		char[] ch=str.toCharArray();
		for(int i=0;i<ch.length;i++)
		{
			if(ch[i]!=ch[ch.length-1-i]) 
				{
				System.out.println("Not a pallindrome"); 
				f=1;
				break;
				}
		}
		if(f==0) System.out.println("Pallindrome"); 
		
		System.out.println("Q-2");
		System.out.println("Enter string- "); 
		String s1=sc.next();
		char[] ch1=s1.toCharArray();
		s1="";
		for(int i=ch1.length-1;i>=0;i--) s1+=ch1[i];
		System.out.println(s1); 
		
		System.out.println("Q-3");
		String s[]= {"mansi","harshit","saransh","paridhi","jai"};
		for(int i=0;i<s.length;i++)
			if(s[i].length()>=5) System.out.println(s[i] + " "); 
		
		System.out.println("Q-4");
		int n1=0,n2=1,ans=0;
		for(int i=1;i<20;i++)
		{
			ans=n1+n2;
			System.out.print(ans+" ");
			n1=n2;
			n2=ans;
		}
		
	}

}
