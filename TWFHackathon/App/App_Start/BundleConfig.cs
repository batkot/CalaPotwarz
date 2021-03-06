﻿using System.Web;
using System.Web.Optimization;

namespace App
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/font-awesome.css",
                      "~/Content/animations.css",
                      "~/Content/common.css",
                      "~/Content/background.css",
                      "~/Content/menu.css",
                      "~/Content/board.css",
                      "~/Content/tile.css",
                      "~/Content/app.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/Scripts/angular.min.js",
                      "~/Scripts/app/models/common.js",
                      "~/Scripts/app/models/game.js",
                      "~/Scripts/app/services/initializer.js",
                      "~/Scripts/app/services/pieceplacer.js",
                      "~/Scripts/app/services/piecerotator.js",
                      "~/Scripts/app/services/scorekeeper.js",
                      "~/Scripts/app/controllers/gamecontroller.js",
                      "~/Scripts/app/bootstrapper.js"));
        }
    }
}