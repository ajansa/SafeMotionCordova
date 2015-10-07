using SafeMotionOData.Models;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData;
namespace SafeMotionOData.Controllers
{
    [EnableQuery]
    public class DetailController : ODataController
    {
        public IHttpActionResult Get()
        {
            return Ok(DataSources.Instance.DetailViewModels.AsQueryable());
        }

        [EnableQuery]
        public IHttpActionResult Get([FromODataUri] String key)
        {
            return Ok(DataSources.Instance.DetailViewModels.Where(p => p.ID == key));
        }

    }

}