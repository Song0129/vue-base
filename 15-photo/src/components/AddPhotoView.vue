<template>
	<div>
		<!-- 上传相关 -->
		<div class="masking">
			<div class="addPhotoContainer"></div>
			<div class="addController">
				<h3 class="addTitle">上传照片-普通上传(H5)<span class="close">╳</span></h3>
				<div class="photoTitles">
					<span class="uploadTo">上传到</span>
					<div class="photoSelect">
						<img class="showPhoto" src="public/img/1.jpg" />
						相册名称
					</div>
				</div>

				<!-- 上传按钮 -->
				<div class="showContainer">
					<div class="uploadContainer">
						<span class="fileinput-button">
							<span>上传图片</span>
							<input class="imgFile" type="file" name="" multiple="multiple" />
						</span>
						<span class="hint"> 按住Ctrl可多选 </span>
					</div>
				</div>

				<!-- 显示待上传图片  -->
				<div class="loadContainer">
					<div class="wantUpload">
						<!-- <div class="uploadPhotoItem">
              <span class="myProgress">
                <span class="plan"></span>
                30%
              </span>
              <img src="public/img/1.jpg" />
              <span class="pictureName">
                home
              </span>
            </div> -->
					</div>
					<div class="addStyle">
						<span class="fileinput-add">
							<span></span>
							<input class="imgFile-add" type="file" multiple="multiple" />
						</span>
					</div>
					<!-- 开始上传按钮 -->
					<div class="bottomStyle">
						<span class="uploadBtn">开始上传</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="less" scoped></style>
