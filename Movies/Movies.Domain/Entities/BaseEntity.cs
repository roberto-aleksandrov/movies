using System;

namespace Movies.Domain.Entities
{
    public class BaseEntity
    {
        public DateTime CreationDate { get; set; }

        public DateTime UpdateDate { get; set; }
    }
}
