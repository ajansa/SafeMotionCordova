﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace SafeMotionOData.Models
{
    public class Person
    {
        [Key]
        public String ID { get; set; }
        [Required]
        public String Name { get; set; }
        public String Description { get; set; }
        public List<Trip> Trips { get; set; }
    }
}