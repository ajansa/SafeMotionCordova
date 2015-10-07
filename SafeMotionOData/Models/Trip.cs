using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace SafeMotionOData.Models
{
    public class Trip
    {
        [Key]
        public String ID { get; set; }
        [Required]
        public String Name { get; set; }
    }
}