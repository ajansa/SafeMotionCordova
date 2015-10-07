using SafeMotionOData.Models;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.OData;
namespace SafeMotionOData.Controllers
{
    [EnableQuery]
    public class PeopleController : ODataController
    {
        public IHttpActionResult Get()
        {
            return Ok(DataSources.Instance.People.AsQueryable());
        }

        [EnableQuery]
        public IHttpActionResult Get([FromODataUri] String key)
        {
            return Ok(DataSources.Instance.People.Where(p => p.ID == key));
        }

    }

}