using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SafeMotionOData.ViewModels
{
    public class ListViewModel
    {
        public String ID { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public int BatteryLevel { get; set; }
        public int LastSignalMin { get; set; }
        public int ActiveAlarms { get; set; }
    }
}