package com.zensar.userapp;

import static org.junit.Assert.assertTrue;
import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.timeout;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Test;

public class UserAppTest {

	@Test
	public void authenticateTest() {
		UserService userService = mock(UserService.class);
		when(userService.authenticate("tom", "tom123")).thenReturn(true);
		assertTrue(userService.authenticate("tom", "tom123"));
	}
	
	@Test(expected=NullPointerException.class)
	public void testNullUsernameOrPassword() {
		UserService userService = mock(UserService.class);
		doThrow(new NullPointerException()).when(userService).authenticate(eq(null), anyString());
		UserApp userApp = new UserApp(userService);
		userApp.login(null, "aa");
	}
	
	@Test
	public void testTimeout() {
		UserService userService = mock(UserService.class);
		UserDTO userDto = new UserDTO();
		when(userService.register(userDto)).thenReturn(userDto);
		UserApp userApp = new UserApp(userService);
		userApp.signup(userDto);
		verify(userService,timeout(200)).register(userDto);
	}
	
	@Test
	public void testCallRealMethod() {
		UserService userService = mock(UserServiceImpl.class);
		//doCallRealMethod().when(userService).authenticate(anyString(), anyString());
		when(userService.authenticate(anyString(), anyString())).thenCallRealMethod();
		UserApp userApp = new UserApp(userService);
		userApp.login("tom", "tom123");
	}
	
	@Test
	public void testSpy() {
		UserService userService = spy(new UserServiceImpl());
		UserApp userApp = new UserApp(userService);
		userApp.login("tom", "tom123");

	}
}
