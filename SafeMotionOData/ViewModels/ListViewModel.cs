using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SafeMotionOData.ViewModels
{
    public class DetailViewModel
    {
        public String ID { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String ProfilePicture { get; set; }
        public int BatteryLevel { get; set; }
        public int LastSignalMin { get; set; }
        public int ActiveAlarms { get; set; }
        public Double Latitude { get; set; }
        public Double Longitude { get; set; }
    }
}