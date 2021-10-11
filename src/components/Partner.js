import React from "react";
import "./Partner.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Partner = () => {
  $(document).ready(function () {
    var itemsMainDiv = ".MultiCarousel";
    var itemsDiv = ".MultiCarousel-inner";
    var itemWidth = "";

    $(".leftLst, .rightLst").click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition) click(0, this);
      else click(1, this);
    });

    ResCarouselSize();

    $(window).resize(function () {
      ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
      var incno = 0;
      var dataItems = "data-items";
      var itemClass = ".item";
      var id = 0;
      var btnParentSb = "";
      var itemsSplit = "";
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $("body").width();
      $(itemsDiv).each(function () {
        id = id + 1;
        var itemNumbers = $(this).find(itemClass).length;
        btnParentSb = $(this).parent().attr(dataItems);
        itemsSplit = btnParentSb.split(",");
        $(this)
          .parent()
          .attr("id", "MultiCarousel" + id);

        if (bodyWidth >= 1200) {
          incno = itemsSplit[3];
          itemWidth = sampwidth / incno;
        } else if (bodyWidth >= 992) {
          incno = itemsSplit[2];
          itemWidth = sampwidth / incno;
        } else if (bodyWidth >= 768) {
          incno = itemsSplit[1];
          itemWidth = sampwidth / incno;
        } else {
          incno = itemsSplit[0];
          itemWidth = sampwidth / incno;
        }
        $(this).css({
          transform: "translateX(0px)",
          width: itemWidth * itemNumbers,
        });
        $(this)
          .find(itemClass)
          .each(function () {
            $(this).outerWidth(itemWidth);
          });

        $(".leftLst").addClass("over");
        $(".rightLst").removeClass("over");
      });
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
      var leftBtn = ".leftLst";
      var rightBtn = ".rightLst";
      var translateXval = "";
      var divStyle = $(el + " " + itemsDiv).css("transform");
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        $(el + " " + rightBtn).removeClass("over");

        if (translateXval <= itemWidth / 2) {
          translateXval = 0;
          $(el + " " + leftBtn).addClass("over");
        }
      } else if (e == 1) {
        var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
        translateXval = parseInt(xds) + parseInt(itemWidth * s);
        $(el + " " + leftBtn).removeClass("over");

        if (translateXval >= itemsCondition - itemWidth / 2) {
          translateXval = itemsCondition;
          $(el + " " + rightBtn).addClass("over");
        }
      }
      $(el + " " + itemsDiv).css(
        "transform",
        "translateX(" + -translateXval + "px)"
      );
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
    }
  });
  return (
    <div id="partner">
      <div class="container partner-div">
        <hr className="partner-decor-gap" />
        <div class="row">
          <div
            class="MultiCarousel"
            data-items="1,3,5,6"
            data-slide="1"
            id="MultiCarousel"
            data-interval="1000"
          >
            <div class="MultiCarousel-inner">
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
              <div class="item">
                <div class="pad15">
                  <p class="lead">Sponsor</p>
                  <p>₹ 1</p>
                  <p>₹ 6000</p>
                  <p>50% off</p>
                </div>
              </div>
            </div>
            <button class="btn leftLst Partner-control">
              <i class="bi bi-arrow-left-circle-fill Partner-control"></i>
            </button>
            <button class="btn rightLst Partner-control">
              <i class="bi bi-arrow-right-circle-fill Partner-control"></i>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <br />
            <br />
            <br />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partner;
