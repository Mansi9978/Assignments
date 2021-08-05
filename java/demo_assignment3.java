package p1;

public class demo_assignment3 {
	
	class car{
		int price;
		String model;
		void display() {
			System.out.println("Hello");
		}
	}

	public static void main(String[] args) {
		try {
			Class cls = Class.forName("car");
			try {
				car c1=(car)cls.newInstance();
				c1.display();
			} 
			catch (InstantiationException | IllegalAccessException e) {
				e.printStackTrace();
			}
			} 
		    catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		

	}

}
