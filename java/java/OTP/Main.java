package otp;

public class Main {

		
	public static void main(String[] args)
	{
		
		int size = 10;
		Genrator genrator = new Genrator();
		String otp = genrator.getOTP(size);
		System.out.println((otp));
		// use Java Mail API
	}

}
