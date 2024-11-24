import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  priceUnit: {
    type: String,
    required: [true, "Please Enter product Price Unit"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  priceUnitValue: {
    type: Number,
    required: [true, "Please Enter product Price Unit Value"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  classify: [
    {
      name: {
        type: String,
      },
      content: [
        {
          type: String,
        },
      ],
    },
  ],
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      sizeBig: {
        public_id: {
          type: String,
          required: true,
        },
        url: [
          {
            type: String,
            required: true,
          },
        ],
      },
      sizeSmall: {
        public_id: {
          type: String,
          required: true,
        },
        url: [
          {
            type: String,
            required: true,
          },
        ],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  brand: {
    nameOfBrand: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },
    urlImage: {
      type: String,
      required: true,
    },
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
