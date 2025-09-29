import { Like } from "../models/like.models.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// get total likes
// like or dislike the video
// like or dislike the comments
// like or dislike the tweets
// get totalLikedVideos