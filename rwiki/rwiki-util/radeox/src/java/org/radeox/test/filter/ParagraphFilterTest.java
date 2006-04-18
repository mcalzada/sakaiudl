/**********************************************************************************
 *
 * $Header$
 *
 ***********************************************************************************
 *
 * Copyright (c) 2006 University of Cambridge
 * 
 * Licensed under the Educational Community License Version 1.0 (the "License");
 * By obtaining, using and/or copying this Original Work, you agree that you have read,
 * understand, and will comply with the terms and conditions of the Educational Community License.
 * You may obtain a copy of the License at:
 * 
 *      http://cvs.sakaiproject.org/licenses/license_1_0.html
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 **********************************************************************************/

package org.radeox.test.filter;

import junit.framework.Test;
import junit.framework.TestSuite;

import org.radeox.filter.ParagraphFilter;

/**
 * @author ieb
 */
public class ParagraphFilterTest extends FilterTestSupport
{

	public ParagraphFilterTest(String s)
	{
		super(s);
		// TODO Auto-generated constructor stub
	}

	protected void setUp() throws Exception
	{
		filter = new ParagraphFilter();
		super.setUp();
	}

	public static Test suite()
	{
		return new TestSuite(ParagraphFilterTest.class);
	}

	public void testParagraph()
	{

		String result = filter.filter(
				"<h1>test</h1>TextA \n\n TextB\n <h2>Head2</h2>", context);
		System.err.println(":" + result + ":");
		assertEquals("<h1>test</h1><p class=\"paragraph\">TextA</p><p class=\"paragraph\"> TextB\n</p> <h2>Head2</h2>", result);
	}
	
	public void testNoChangeParagraph()
	{

		String result = filter.filter(
				"Some __Simple__ Content", context);
		System.err.println(":" + result + ":");
		assertEquals("Some __Simple__ Content", result);
	}
	public void testDoubleParagraph()
	{

		String result = filter.filter(
				"\n\nSome __Simple__ Content", context);
		System.err.println(":" + result + ":");
		assertEquals("<p class=\"paragraph\"></p><p class=\"paragraph\">Some __Simple__ Content</p>", result);
	}
	public void testSingleParagraph()
	{

		String result = filter.filter(
				"\nSome __Simple__ Content", context);
		System.err.println(":" + result + ":");
		assertEquals("\nSome __Simple__ Content", result);
	}
	public void testSingleEmbededParagraph()
	{

		String result = filter.filter(
				"\nSome\n\n__Simple__ Content", context);
		System.err.println(":" + result + ":");
		assertEquals("<p class=\"paragraph\">\nSome</p><p class=\"paragraph\">__Simple__ Content</p>", result);
	}

}
