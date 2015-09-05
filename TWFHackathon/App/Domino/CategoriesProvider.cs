using App.Models;
using System;
using System.Collections.Generic;

namespace App.Domino
{
    public class CategoriesProvider : ICanDrawDominoTile
    {
        private List<Category> _categories; 
        public CategoriesProvider()
        {
            _categories = new List<Category>
            {
                new Category("Animal", new List<string>() { "cat1.png", "cat2.png", "dog1.png", "dog2.png" }),
                new Category("Building", new List<string>() { "ancient.png", "castle.png", "house.png", "mosque.png" }),
                new Category("Digit", new List<string>() { "1.png", "2.png", "3.png", "4.png" }),
                new Category("Flower", new List<string>() { "flower1.png", "flower2.png", "flower3.png", "flower4.png" }),
                new Category("Land_Vehicle", new List<string>() { "bicycle.png", "car1.png", "car2.png", "motorcycle.png" }),
                new Category("Letter", new List<string>() { "A.png", "B.png", "C.png", "D.png" }),
                new Category("Person", new List<string>() { "body.png", "female.png", "femaleHead.png", "maleHead.png" }),
                new Category("Phone", new List<string>() { "analog.png", "bootstrap.png", "earphone.png", "mobile.png" }),
                new Category("Plane", new List<string>() { "plane1.png", "plane2.png", "plane3.png", "plane4.png" }),
                new Category("Shoe", new List<string>() { "shoe1.png", "shoe2.png", "shoe3.png", "shoe4.png" })
            };
        }

        public DominoTile DrawTile()
        {
            var category = _categories[_rand.Next(_categories.Count)];
            var picture = category.Pictures[_rand.Next(category.Pictures.Count)];
            var picturePath = string.Format(@"gfx/pics/{0}/{1}", category.Name, picture);
            return new DominoTile(category.Name, picturePath);
        }

        private static Random _rand = new Random(Guid.NewGuid().GetHashCode());
    }
}
