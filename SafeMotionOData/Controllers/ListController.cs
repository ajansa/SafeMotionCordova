using SafeMotionOData.Models;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.OData;
using System.Web.Http.Cors;
namespace SafeMotionOData.Controllers
{
    [EnableQuery]
    public class ListController : ODataController
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