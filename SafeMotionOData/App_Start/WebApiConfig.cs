using SafeMotionOData.Models;
using SafeMotionOData.ViewModels;
using Microsoft.OData.Edm;
using System.Web.Http;
using System.Web.OData.Batch;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using System.Web.Http.Cors;

namespace SafeMotionOData
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            // enable cross origin resource sharing for all origins defined in application settings
            config.EnableCors(new EnableCorsAttribute(Properties.Settings.Default.CorsOrigins, "*", "*"));

            // cofigure odata route
            config.MapODataServiceRoute("odata", null, GetEdmModel(), new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer));
            config.EnsureInitialized();
        }
        private static IEdmModel GetEdmModel()
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.Namespace = "Demos";
            builder.ContainerName = "DefaultContainer";
            builder.EntitySet<Person>("People");
            builder.EntitySet<Trip>("Trips");
            builder.EntitySet<DetailViewModel>("Detail");
            builder.EntitySet<ListViewModel>("List");
            var edmModel = builder.GetEdmModel();
            return edmModel;
        }
    }
}