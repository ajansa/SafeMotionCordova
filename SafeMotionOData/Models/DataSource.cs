using SafeMotionOData.ViewModels;
using System;
using System.Collections.Generic;
namespace SafeMotionOData.Models
{
    public class DataSources
    {
        private static DataSources instance = null;

        public static DataSources Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new DataSources();
                }
                return instance;
            }
        }

        public List<Person> People { get; set; }
        public List<Trip> Trips { get; set; }

        public List<DetailViewModel> DetailViewModels { get; set;  }
        public List<ListViewModel> ListViewModels { get; set; }

        private DataSources()
        {
            this.Reset();
            this.Initialize();
        }

        public void Reset()
        {
            this.People = new List<Person>();
            this.Trips = new List<Trip>();
            this.DetailViewModels = new List<DetailViewModel>();
            this.ListViewModels = new List<ListViewModel>();

        }
        public void Initialize()
        {
            this.Trips.AddRange(new List<Trip>()
            {
                new Trip() { ID = "0", Name = "Trip 0" },
                new Trip() { ID = "1", Name = "Trip 1" },
                new Trip() { ID = "2", Name = "Trip 2" },
                new Trip() { ID = "3", Name = "Trip 3" }
            });
            this.People.AddRange(new List<Person>
            {
                new Person() { ID = "001", Name = "Angel", Trips = new List<Trip>{Trips[0], Trips[1]} },
                new Person() { ID = "002", Name = "Clyde", Description = "Contrary to popular belief, Lorem Ipsum is not simply random text.", Trips = new List<Trip>{Trips[2], Trips[3]} },
                new Person() { ID = "003", Name = "Elaine", Description = "It has roots in a piece of classical Latin literature from 45 BC, making Lorems over 2000 years old." }
            });

            this.DetailViewModels.AddRange(new List<DetailViewModel>
            {
                new DetailViewModel() { ID = "0001", FirstName = "Server FN1", LastName = "Server LN1", ProfilePicture = "Images/serviceuser.png", ActiveAlarms = 0, BatteryLevel = 30, LastSignalMin = 0, Latitude = 51.5, Longitude = -0.1 },
                new DetailViewModel() { ID = "0002", FirstName = "Server FN2", LastName = "Server LN2", ProfilePicture = "Images/serviceuser.png", ActiveAlarms = 2, BatteryLevel = 50, LastSignalMin = 1, Latitude = 51.6, Longitude = -0.2 },
                new DetailViewModel() { ID = "0003", FirstName = "Server FN3", LastName = "Server LN3", ProfilePicture = "Images/serviceuser.png", ActiveAlarms = 3, BatteryLevel = 60, LastSignalMin = 2, Latitude = 51.4, Longitude = -0.3 },
                new DetailViewModel() { ID = "0004", FirstName = "Server FN4", LastName = "Server LN4", ProfilePicture = "Images/serviceuser.png", ActiveAlarms = 1, BatteryLevel = 80, LastSignalMin = 4, Latitude = 51.7, Longitude = 0.1 },
            });

            this.ListViewModels.AddRange(new List<ListViewModel>
            {
                new ListViewModel() { ID = "0001", FirstName = "Server FN1", LastName = "Server LN1", ActiveAlarms = 0, BatteryLevel = 30, LastSignalMin = 0 },
                new ListViewModel() { ID = "0002", FirstName = "Server FN2", LastName = "Server LN2", ActiveAlarms = 2, BatteryLevel = 50, LastSignalMin = 1 },
                new ListViewModel() { ID = "0003", FirstName = "Server FN3", LastName = "Server LN3", ActiveAlarms = 3, BatteryLevel = 60, LastSignalMin = 2 },
                new ListViewModel() { ID = "0004", FirstName = "Server FN4", LastName = "Server LN4", ActiveAlarms = 1, BatteryLevel = 80, LastSignalMin = 4 }
            });

        }
    }
}