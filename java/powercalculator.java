package p1;
import java.util.*;


public class powercalculator {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);  
		System.out.println("Enter number- ");  
		int a= sc.nextInt();  
		System.out.println("Enter power- ");  
		int b= sc.nextInt();  
		int res=1;
		for(int i=1;i<=b;i++) res*=a;
		System.out.println(res);
	}

}
