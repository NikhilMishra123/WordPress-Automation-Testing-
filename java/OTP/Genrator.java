package otp;

import java.util.Random;

/**
 * @description This code create an Alphanumeric OTP without using any array or string.
 * @author Nikhil
 * 
 */
public class Genrator {
	
	String getOTP(int size)
	{
		Random random = new Random();
		String otp ="";
		for(int i=0;i<8;i++)
		{
			otp = otp+ (char)((random.nextInt(2)==1)?(random.nextInt(26)+65):(random.nextInt(9)+48));			
		}
		return otp;
	} 
}
