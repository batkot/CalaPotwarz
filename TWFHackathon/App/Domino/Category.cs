using System.Collections.Generic;

namespace App.Domino
{
    public class Category
    {
        public string Name { get; private set; }
        public List<string> Pictures { get; private set; }

        public Category(string name, List<string> pictures)
        {
            Name = name;
            Pictures = pictures;
        }
    }
}