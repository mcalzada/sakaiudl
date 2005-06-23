/**********************************************************************************
* $HeaderURL$
* $Id$
***********************************************************************************
*
* Copyright (c) 2005 The Regents of the University of Michigan, Trustees of Indiana University,
*                  Board of Trustees of the Leland Stanford, Jr., University, and The MIT Corporation
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

package org.sakaiproject.tool.assessment.settings;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.sakaiproject.framework.Constants;
import org.sakaiproject.framework.ThreadLocalMapProvider;

import osid.OsidException;
import osid.OsidLoader;
import osid.OsidOwner;

/**
 * Configures OKI OSID impl at startup.
 * @author <a href="mailto:lance@indiana.edu">Lance Speelmon</a>
 * @version $Id$
 */
public class OkiOsidConfigListener
  implements ServletContextListener
{
  private static final org.apache.log4j.Logger LOG =
    org.apache.log4j.Logger.getLogger(OkiOsidConfigListener.class);

  /**
   * @see javax.servlet.ServletContextListener#contextInitialized(javax.servlet.ServletContextEvent)
   */
  public void contextInitialized(ServletContextEvent sce)
  {
//    if(LOG.isDebugEnabled())
//    {
//      LOG.debug("contextInitialized(ServletContextEvent " + sce + ")");
//    }

		LOG.debug(
		"OkiOsidConfigListener.contextInitialized(ServletContextEvent " + sce + ")");

    try
    {
			PathInfo pathInfo = PathInfo.getInstance();
      OsidOwner owner = new OsidOwner();
      owner.addContext("PATH_TO_SECURITY", pathInfo.getBasePathToSecurity());
      owner.addContext("PATH_TO_SETTINGS", pathInfo.getBasePathToSettings());

      LOG.debug("PATH_TO_SETTINGS = " + owner.getContext("PATH_TO_SETTINGS"));
      LOG.debug(owner);
      //SharedManager sm = OsidManagerFactory.createSharedManager(owner);

      // this code initializes the PathInfo IN THE OKI LAYER!! in an indirect manner (through the manager)
			OsidLoader.getManager("osid.shared.SharedManager", "org.sakai.osid.shared.impl", owner);


      LOG.info("OkiOsidConfigListener initialized successfully!");

			ThreadLocalMapProvider.getMap().put(Constants.OSID_OWNER, owner);
    }
    catch(OsidException e)
    {
      LOG.fatal(e.getMessage(), e);
      throw new Error(e);
    }

  }

  /**
   * @see javax.servlet.ServletContextListener#contextDestroyed(javax.servlet.ServletContextEvent)
   */
  public void contextDestroyed(ServletContextEvent sce)
  {
    ;
  }
}
